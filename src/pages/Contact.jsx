function Contact () {
  return (
    <section className="hero">
        <h1 class="page-title">Contacto</h1>  
            <form class="form">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Tu nombre"/>
                </div>
                <div class="form-group">
                    <label for="lastname">Apellido</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Tu apellido" required />
                </div>
                <div class="form-group">
                    <label for="phone">Telefono</label>
                    <input type="tel" name="phone" id="phone" placeholder="+54 11 1234-5678" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="your-email@email.com" required />
                </div>
                <div class="form-group">
                    <label for="reason">Motivo de contacto</label>
                    <select name="reason" id="reason">
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="reserva">Corrección de datos</option>
                        <option value="eventos">Más información sobre una estación</option>
                        <option value="trabajo">Más información sobre una línea</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="comment">Mensaje</label>
                    <textarea name="comment" id="comment" placeholder="Contanos en qué te podemos ayudar" required cols="40" rows="5" maxlength="1500" minlength="1"></textarea>
                </div>
                <div class="form-buttons">
                    <button class="btn btn-primary" type="submit">Enviar mensaje</button>
                    <button class="btn btn-secondary" type="reset">Limpiar formulario</button>
                </div>
            </form>
    </section>
  );
}

export default Contact;