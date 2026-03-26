import sys
try:
    from pypdf import PdfReader
    reader = PdfReader("e:/portfolio/Harsh_Pandey_Resume_5 (1).pdf")
    text = "\n".join([page.extract_text() for page in reader.pages])
    with open("e:/portfolio/resume_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success")
except Exception as e:
    print(e)
