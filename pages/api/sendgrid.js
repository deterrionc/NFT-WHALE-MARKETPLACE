import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		// console.log("REQ.BODY", req.body);
		await sendgrid.send({
			to: 'info@getvault3d.com', // Your email where you'll receive emails
			from: 'info@getvault3d.com', // your website email address here
			subject: `[VAULT3D Contact Form] : ${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                    <html lang="en">
                    <head>
                    <meta charset="utf-8">

                    <title>Contact Form on GetVault3d</title>
                    <meta name="description" content="Contact Form on GetVault3d">
                    <meta name="author" content="Michael">
                    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

                    </head>

                    <body>
                            <div class="container" style="margin-left: 20px;margin-right: 20px;">
                            <h3>A user emailed using the contact form on GetVAULT3D.com/contact.</h3>
                            <p>Name: ${req.body.fullname}</p>
                            <p>Email: ✉️${req.body.email} </p>
                            <p>Subject: ✉️${req.body.subject} </p>
                            <div style="font-size: 16px;">
                                <p>Message:</p>
                                <p>${req.body.message}</p>
                            </div>
                            </div>
                    </body>
                    </html>`,
		});
	} catch (error) {
		// console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;
