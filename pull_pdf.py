import requests
import os
import sys
from typing import Optional

def download_google_doc_as_pdf(
    doc_url: str, 
    output_folder: str, 
    filename: Optional[str] = None
) -> Optional[str]:
    """
    Download a Google Doc as PDF
    
    Args:
        doc_url (str): The Google Doc URL (must be publicly viewable)
        output_folder (str): Path to the folder where PDF will be saved
        filename (str): Optional filename for the PDF (without extension)
    
    Returns:
        str: Path to the downloaded file if successful, None if failed
    """
    
    try:
        # Extract document ID from the URL
        if '/document/d/' in doc_url:
            doc_id = doc_url.split('/document/d/')[1].split('/')[0]
        else:
            print("Error: Invalid Google Doc URL format")
            return None
        
        # Construct the PDF export URL
        pdf_url = f"https://docs.google.com/document/d/{doc_id}/export?format=pdf"
        
        # Create output folder if it doesn't exist
        os.makedirs(output_folder, exist_ok=True)
        
        # Set default filename if not provided
        if not filename:
            filename = f"google_doc_{doc_id}"
        
        # Ensure filename has .pdf extension
        if not filename.endswith('.pdf'):
            filename += '.pdf'
        
        # Full path for the output file
        output_path = os.path.join(output_folder, filename)
        
        print(f"Downloading PDF from Google Doc...")
        print(f"URL: {pdf_url}")
        print(f"Saving to: {output_path}")
        
        # Download the PDF
        response = requests.get(pdf_url)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        # Check if we got a PDF (sometimes Google returns HTML error pages)
        if response.headers.get('content-type', '').startswith('application/pdf'):
            # Save the PDF
            with open(output_path, 'wb') as f:
                f.write(response.content)
            
            print(f"✅ Successfully downloaded PDF: {output_path}")
            print(f"File size: {len(response.content)} bytes")
            return output_path
        else:
            print("❌ Error: The document might not be publicly accessible or the URL is incorrect")
            print("Make sure the Google Doc is set to 'Anyone with the link can view'")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Network error: {e}")
        return None
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return None

def main():
    OUTPUT_FOLDER = r"C:\Roger-Gu.github.io\public\assets\pdfs\COC"
    download_list = [
        {
        "filename": "第三世界.pdf",
        "url": "https://docs.google.com/document/d/1uXW4_6x5e_9MPv7XFOUjRQht5JJN9f1iUD47Gl5EXgE/edit?usp=share_link"
        },
        {
        "filename": "房规列表和第二世界.pdf",
        "url": "https://docs.google.com/document/d/113RXWoXUqL2RgTU68_KyaQYAH0H5ItiLI4UPaYE7aIs/edit?usp=sharing"
        }
    ]
    
    # Download the PDF
    for doc in download_list:
        result = download_google_doc_as_pdf(doc["url"], OUTPUT_FOLDER, doc["filename"])
        
        if result:
            print(f"File saved at: {result}")
        else:
            print(f"\n💥 Download failed. Please check the URL and try again. Failed url:" + doc["url"])
            sys.exit(1)
    print(f"\n🎉 Download completed successfully!")

if __name__ == "__main__":
    main()