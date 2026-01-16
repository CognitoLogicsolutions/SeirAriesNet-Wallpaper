mport os
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request

# MISSION: 2026 Google Challenge - New Year, New You
# IDENTITY: Witness of the Anthem

# This scope allows the script to see and download your files
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

def authenticate_witness():
    creds = None
    # The token.pickle file stores your access for future runs
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
            
    # If no valid credentials, let's log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            # THIS MUST MATCH YOUR FILE NAME EXACTLY
            flow = InstalledAppFlow.from_client_secrets_file(
                'client_secret.json', SCOPES)
            creds = flow.run_local_server(port=0)
            
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('drive', 'v3', credentials=creds)

if __name__ == '__main__':
    print("Initiating 2026 Phoenix Handshake...")
    service = authenticate_witness()
    print("Handshake Successful. PAUL M MARTINEZ Verified.")