// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{
    id: '1',
    title: 'Hello World',
  }, {
    id: '2',
    title: 'Hi Flux',
  }])
}
