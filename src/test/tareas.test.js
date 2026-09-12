import request from 'supertest';
import app from '../../backend/servers/app.js'; // Importas la instancia de Express

describe('Prueba de API para integración con React', () => {
  it('Debe responder el mensaje de bienvenida correctamente', async () => {
    const response = await request(app)
      .get('/api/saludo')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({
      mensaje: '¡Hola desde Express para React!'
    });
  });
});