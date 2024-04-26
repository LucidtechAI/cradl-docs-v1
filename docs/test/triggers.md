# Connecting to `Triggers`
Welcome to the last section of this tutorial. In this section, we will:
- Import a document through a Trigger rather than through manual upload.
- Automatically scan the imported document.
- Validate the scanned document
- Export the scanned document. 

In this tutorial, we will be using an `email` as our `Trigger`, as it is the easiest to set up and test. You can find guides to the other triggers under our integrations guides. 

## Adding `email` trigger
From your `Flow` overview, click <span className="utils-admonition-success">**`+ Add trigger`**</span>:

![Image](../../static/img/triggers/triggers-selectTrigger.png)

- Choose <span className="utils-admonition-success">**`Email`**</span>

You might be asked to `save` your `Flow`; 

![Image](../../static/img/triggers/triggers-saveFlow.png)

In which case you simply <span className="utils-admonition-success">**`Save`**</span> your flow from the top navigation bar.

After saving, you should see a code. This code is a Cradl email address that will automatically scan the documents it recieves. You will forward your documents to this address from your email provider in order to trigger an automatic scan of the document in Cradl.

![Image](../../static/img/triggers/triggers-emailCode.png)


In order to try this out: 
 - **Log in** to your email provider.
 - **Create an email**, paste in the Cradl email address as the recipient.
 - **Attach** your document as a **file attachment** - not in the body text area of the email.
 - **Send** the email. 

 :::warning
 Make sure you:
    -  Add the document as a file attachment (such as PDF or an image file)

Make sure you do not:
    - Add the document inside the email's body text area.
    - Do not add more than one attached file per email. 
 :::

## Invoking a `Trigger`
Once you **send** the email with the file attachment, you will trigger your `flow` to automatically scan the document.