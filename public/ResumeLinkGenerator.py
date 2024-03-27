import pdfrw
import re
import secrets

def generate_random_id():
    # Generate an 8-character alphanumeric random ID
    return secrets.token_hex(4)[:8]

def edit_file(file_path, link_to_replace, company_name):
    # Generate a random ID
    random_id = generate_random_id()

    # Create the new link with the random ID
    new_link = f'https://jobapp-ad828.web.app#{random_id}'

    # Open the existing PDF
    pdf = pdfrw.PdfReader(file_path)

    # Create a new PDF writer
    new_pdf = pdfrw.PdfWriter()

    # Iterate through each page
    for page in pdf.pages:
        # Get the existing page
        for annot in page.Annots or []:
            old_url = annot.A.URI
            if old_url == None:
                continue
            print(new_link, company_name)
            new_url = old_url.replace(link_to_replace, new_link)
            # Convert the new string for PDF strings
            new_url = pdfrw.objects.pdfstring.PdfString(new_url)
            # Update the hyperlink
            annot.A.URI = new_url

        # Save the modified PDF to a new file
        new_pdf.addPage(page)
    new_pdf.write(r"public\Resume Modified.pdf")
    # Append to the jobMap.txt file
    with open(r'public\jobMap.txt', 'a') as job_map_file:
        job_map_file.write(f'{company_name} : {random_id}\n')
# Example usage:
edit_file(r'public\Resume_New.pdf', 'https://jobapp-ad828.web.app#resume', 'RCM')