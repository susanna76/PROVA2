# Demo sito – servizio "capo su manichino → capo su modella"

Landing page di esempio da mostrare a piccoli negozianti/brand di abbigliamento
per spiegare il servizio: il negoziante manda le foto dei propri capi (anche
su manichino o scattate col telefono) e riceve le stesse foto con il capo
indossato da una modella, pronte per e-commerce e social.

## File

- `index.html` — struttura della pagina
- `style.css` — stile (palette crema/nero/oro, stessa atmosfera delle foto di esempio)
- `script.js` — solo il menu mobile
- `img/` — le 4 foto di esempio (prima su manichino, dopo indossate dalla modella)

## Come vederla

Apri semplicemente `index.html` in un browser, oppure con un server locale:

```
cd demo-abbigliamento
python3 -m http.server 8000
```

poi vai su `http://localhost:8000`.

## Cosa personalizzare prima di usarla davvero

- Nome/logo (`Vesti.Online` è un nome segnaposto)
- Email di contatto (attualmente punta a quella del proprietario del sito)
- Prezzi/pacchetti nella sezione "Pacchetti" (sono indicativi)
- Il form contatti usa `mailto:` come soluzione semplice: per un sito reale
  conviene collegarlo a un servizio tipo Formspree o a un backend proprio.
