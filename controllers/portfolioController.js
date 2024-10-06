const sendEmailController = (req, res) => {
  try {
    return res.status(200).send({
      success: true,
      message: "Your message has been sent",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send mail API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
