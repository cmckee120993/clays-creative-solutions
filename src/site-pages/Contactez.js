import React from 'react';
import '../styles/contact.css';
import {useForm, ValidationError} from '@formspree/react';


function Contactez() {
    const [state, handleSubmit] = useForm('xyyakgly');

    if (state.succeeded) {
        <div className='success-message'>
            <p lang='fr'>
                Merci pour votre message! Clayton répondra dès que possible.
                Pour envoyer un autre message, retournez à <a href=''>Me contactez</a>, 
                ou vous pouvez retrouner à l'<a href=''>Acceuil</a>. 
            </p>
        </div>
    }
    return (
        <div className='contact-content'>
            <h2 className='contact-title'>Me Contactez</h2>
            <div className='contact-div'>
                <div className='general-contact'>
                    <p className='contact-des' lang='fr'>
                        Je suis actuellement à Nice en France, mais, je travaille avec des clients partout dans le monde!
                       Tous les prix sont basés sur l'euro; par contre, les prix sera échangé pour votre argent et le taux
                       de conversion sera calculé avec le taux du jour quand je vous envoie la facture. Me contactez pour une
                       une estimation pour votre projet pour avoir une idée du prix. 
                    </p>
                    <div className='contact-card'>
                        <p className='link' lang='fr'>E-mail: 
                            <a href='mailto:clayscreativesolutions@gmail.com' target='_blank' rel='noreferrer'>
                                clayscreativesolutions@gmail.com
                            </a>
                        </p>
                        <p className='link' lang='fr'>Téléphone: 
                            <a href='tel:+33769777978' target='_blank' rel='noreferrer'>
                                +33 7 69 77 79 78
                            </a>
                        </p>
                    </div>
                </div>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='contact-form-div'>
                        <label htmlFor='name' lang='fr'>Nom et prénom</label>
                        <input id='name' type='text' name='name'/>
                    </div>
                    <div className='contact-form-div'>
                        <label htmlFor='email' lang='fr'>E-mail</label>
                        <input id='email' type='email' name='email'/>
                    </div>
                    <div className='contact-form-div'>
                        <label htmlFor='message' lang='fr'>Votre message</label>
                        <textarea className='textarea' name='message' rows='10'/>
                    </div>
                    <ValidationError
                        prefix='Message'
                        field='message'
                        errors={state.errors}
                    />
                    <div className='contact-form-div'>
                        <button type='submit' disabled={state.submitting} lang='fr'>
                            Envoyez
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contactez;