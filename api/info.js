export default function handler(req, res) {
    res.status(200).json({
        message: "API deployed successfully!",
        version: "1.0.0",
        author: "Winata Tristan, 18222061",
    });
}