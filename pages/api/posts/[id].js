export default function handler(req, res) {
    const { id } = req.query;
    if (id === '1') {
        res.status(200).json({
            id,
            title: `Hello World, Flux1`,
        });
    } else if (id === '2') {
        res.status(200).json({
            id,
            title: `Hello World, Flux2`,
        });
    } else {
        res.status(404).end('Not found');
    }
};
