const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const { page = 1 } = req.query;
    // gett total of incidents
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    // send total on header
    res.header('X-Total-Count', count['count(*)']);
    return res.json(incidents);
  },
};
