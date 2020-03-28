import connection from '../database/connection';

export default {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    return !ong
      ? response.status(400).json({ error: 'No ONG found with this ID' })
      : response.json(ong);
  }
};
