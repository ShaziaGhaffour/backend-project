import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bursatransromaniaitalia@gmail.com",
        pass: "xecu ywbg xztn rigr"  
    },
    secure: true,
    timeout: 10000
});

const SendMail = async (email, subject, text) => {
    try {
        const mailOptions = {
            from: 'bursatransromaniaitalia@gmail.com', 
            to: email,                       
            subject: subject,
            html: text
        };
        await transporter.sendMail(mailOptions);
        console.log("Email send successfully");
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        throw new Error("Failed to send mail");
    }
};

export default SendMail;