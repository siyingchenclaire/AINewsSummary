import requests
import json
import time
import os

# --- Configuration ---
output_dir = "D:\ainewssummary\AINewsSummary\podcast_data\transcription"
filename = "20250610_pivot.json" # This was just the file name
filepath = os.path.join(output_dir, filename) # This is the full path!



# IMPORTANT: Replace with your actual AssemblyAI API Key
ASSEMBLYAI_API_KEY = "f872f1b84b85485b9c425978cf3731fe"

# Base URL for the AssemblyAI API
ASSEMBLYAI_BASE_URL = "https://api.assemblyai.com/v2"

# Headers for authentication
HEADERS = {
    "authorization": ASSEMBLYAI_API_KEY,
    "content-type": "application/json"
}

def transcribe_audio_with_assemblyai(audio_url, enable_diarization=True, enable_summarization=True):
    """
    Sends an audio URL to AssemblyAI for transcription, speaker diarization, and summarization,
    then polls for results.

    Args:
        audio_url (str): The publicly accessible URL of the audio file (e.g., MP3 link from RSS).
        enable_diarization (bool): Whether to enable speaker diarization.
        enable_summarization (bool): Whether to enable summarization.

    Returns:
        dict: A dictionary containing the transcription text, speaker-labeled segments,
              and the summary, or None if transcription fails.
    """
    if not ASSEMBLYAI_API_KEY or ASSEMBLYAI_API_KEY == "YOUR_ASSEMBLYAI_API_KEY":
        print("Error: AssemblyAI API Key is not set. Please replace 'YOUR_ASSEMBLYAI_API_KEY' in the script.")
        return None

    # Step 1: Submit the audio URL for transcription
    print(f"Submitting audio for transcription: {audio_url}")
    transcribe_endpoint = f"{ASSEMBLYAI_BASE_URL}/transcript"
    
    payload = {
        "audio_url": audio_url,
        "speaker_diarization": enable_diarization,
        "summarization": enable_summarization,
        "summary_model": "informative",  # "informative" or "conversational"
        "summary_type": "bullets",       # "bullets", "gist", "headline", "paragraphs"
        # You can add other features here, e_g., "sentiment_analysis": True
    }

    try:
        response = requests.post(transcribe_endpoint, headers=HEADERS, json=payload)
        response.raise_for_status() # Raise an exception for HTTP errors (4xx or 5xx)
        
        transcript_info = response.json()
        transcript_id = transcript_info.get('id')

        if not transcript_id:
            print(f"Error: No transcript ID received from AssemblyAI. Response: {transcript_info}")
            return None
        
        print(f"Transcription job submitted. Job ID: {transcript_id}")

        # Step 2: Poll for the transcription status
        poll_endpoint = f"{transcribe_endpoint}/{transcript_id}"
        status = transcript_info.get('status')

        while status not in ["completed", "error"]:
            print(f"Status for job {transcript_id}: {status}. Polling again in 10 seconds...")
            time.sleep(10) # Wait for 10 seconds before polling again

            poll_response = requests.get(poll_endpoint, headers=HEADERS)
            poll_response.raise_for_status()
            poll_data = poll_response.json()
            status = poll_data.get('status')

        if status == "completed":
            print(f"Transcription job {transcript_id} completed successfully!")
            
            # Extract main transcription text
            full_text = poll_data.get('text')
            
            # Extract speaker-labeled segments (if diarization was enabled)
            speakers_text = []
            if enable_diarization and 'words' in poll_data:
                current_speaker = None
                current_segment_words = []
                for word in poll_data['words']:
                    if word.get('speaker') != current_speaker:
                        if current_speaker is not None:
                            speakers_text.append(f"{current_speaker}: {' '.join(current_segment_words)}")
                        current_speaker = word.get('speaker')
                        current_segment_words = [word['text']]
                    else:
                        current_segment_words.append(word['text'])
                if current_speaker is not None: # Add the last segment
                    speakers_text.append(f"{current_speaker}: {' '.join(current_segment_words)}")
            
            # Extract summary (if summarization was enabled)
            summary = poll_data.get('summary')

            return {
                "transcript_full_text": full_text,
                "transcript_by_speakers": speakers_text,
                "summary": summary
            }
        else:
            error_message = poll_data.get('error', 'Unknown error during transcription.')
            print(f"Transcription job {transcript_id} failed. Error: {error_message}")
            return None

    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        return None
    except json.JSONDecodeError:
        print("Failed to decode JSON response from AssemblyAI API.")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

# --- Main execution block (example usage) ---
if __name__ == "__main__":
    # Example MP3 URL from a Pivot podcast episode (replace with an actual URL from your RSS feed processing)
    # This URL should be publicly accessible for AssemblyAI to fetch it.
    example_pivot_mp3_url = "https://dcs-spotify.megaphone.fm/VMP3657193892.mp3?key=f5742a4ddef67ccfac1bfe699078f13e&request_event_id=ac3d65d8-46f2-47b7-8be6-97c79e49fa59&session_id=ac3d65d8-46f2-47b7-8be6-97c79e49fa59&timetoken=1749575079_F6CA94CACB6FFAF8DCA307D1F3423D12"
    
    # --- IMPORTANT ---
    # Before running, make sure you have replaced "YOUR_ASSEMBLYAI_API_KEY"
    # with your actual API key from AssemblyAI.
    if ASSEMBLYAI_API_KEY == "YOUR_ASSEMBLYAI_API_KEY":
        print("\n!!! WARNING: Please update ASSEMBLYAI_API_KEY in the script with your actual API key. !!!\n")
    else:
        print(f"Starting transcription process for: {example_pivot_mp3_url}")
        
        # Call the transcription function with diarization and summarization enabled
        transcription_results = transcribe_audio_with_assemblyai(
            example_pivot_mp3_url,
            enable_diarization=True,
            enable_summarization=True
        )

        if transcription_results:
            print("\n--- Transcription Results ---")
            print("\nFull Transcript (first 1000 characters):")
            print(transcription_results["transcript_full_text"][:1000] + "...")
            
            print("\nTranscript by Speakers (first 5 segments):")
            for i, segment in enumerate(transcription_results["transcript_by_speakers"][:5]):
                print(f"Segment {i+1}: {segment}")
            if len(transcription_results["transcript_by_speakers"]) > 5:
                print("...")

            print("\nSummary:")
            print(transcription_results["summary"])
            
            # You can now save these results to your JSON file for the episode
            # For example:
            episode_data["transcription"] = transcription_results["transcript_full_text"]
            episode_data["transcription_speakers"] = transcription_results["transcript_by_speakers"]
            episode_data["summary"] = transcription_results["summary"]
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(episode_data, f, indent=2, ensure_ascii=False)
        else:
            print("\nTranscription process failed.")

