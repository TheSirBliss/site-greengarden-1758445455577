# Security Best Practices

## Content Security Policy (CSP)

La Content Security Policy (CSP) è implementata per mitigare i rischi di cross-site scripting (XSS) e altre vulnerabilità di sicurezza.  La seguente direttiva CSP è applicata:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;
```

**Spiegazione:**

* `default-src 'self'`:  Permette il caricamento di risorse solo dal dominio corrente.
* `script-src 'self' 'unsafe-inline'`: Permette l'esecuzione di script solo dal dominio corrente.  `'unsafe-inline'` è temporaneamente incluso per facilitare lo sviluppo, ma dovrebbe essere rimosso in produzione e sostituito con l'hashing delle risorse inline.
* `style-src 'self' 'unsafe-inline'`: Permette il caricamento di fogli di stile solo dal dominio corrente. `'unsafe-inline'` è temporaneamente incluso per facilitare lo sviluppo, ma dovrebbe essere rimosso in produzione e sostituito con l'hashing delle risorse inline.
* `img-src 'self' data:`: Permette il caricamento di immagini solo dal dominio corrente e da URL `data:`.

**Note:**

L'utilizzo di `'unsafe-inline'` è una pratica non consigliata in produzione.  Si consiglia di sostituirlo con l'hashing delle risorse inline per migliorare la sicurezza.  Questa direttiva sarà aggiornata in futuro per rimuovere `'unsafe-inline'` e includere solo sorgenti sicure.