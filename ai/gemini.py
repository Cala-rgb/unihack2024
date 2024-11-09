import google.generativeai as genai

import os
genai.configure(api_key="696969696969nice")


model = genai.GenerativeModel(model_name="gemini-1.5-flash")
response = model.generate_content("CAN YOU FEEL MY HEART?")
print(response.text)