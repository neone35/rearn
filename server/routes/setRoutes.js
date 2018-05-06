import CardSet from '../models/CardSet';
import requireLogin from '../middlewares/requireLogin';

export default function setRoutes(server) {
  server.post('/api/newset', async (req, res) => {
    const { setName, card } = req.body;
    console.log(setName);
    console.log(card);
    const newSet = new CardSet({
      cards: card.map((question, answer, hint) => ({ question, answer, hint })),
      createdAt: Date.now(),
      title: setName,
      score: 0,
      timeSpent: 0,
      _user: req.user.id,
    });
    // Save set
    try {
      await newSet.save();
      console.log(newSet);
    } catch (err) {
      res.status(422);
    }
  });
}
