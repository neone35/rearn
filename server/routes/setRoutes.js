import requireLogin from '../middlewares/requireLogin';
import CardSet from '../models/CardSet';

export default function setRoutes(server) {
  server.post(
    '/api/newset',
    requireLogin,
    async (req, res) => {
      const { setName, cards } = req.body;
      const newSet = new CardSet({
        cards: cards.map(card =>
          ({
            question: card.question,
            answer: card.answer,
            hint: card.hint,
          })),
        createdAt: Date.now(),
        title: setName,
        score: 0,
        timeSpent: 0,
        _user: req.user.id,
      });
      // console.log(newSet);
      // Save set
      try {
        await newSet.save((err) => { // eslint-disable-next-line
        if (err) return console.error(err);
          return res.send(newSet);
        });
      } catch (err) {
        res.status(422);
      }
    },
  );
}
