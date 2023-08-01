import modalHtml from './render-modal.html?raw';
import './render-modal.css'

let modal, form;

// TODO: Cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {

    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');
    
    modal.addEventListener('click', (event) => {
        if(event.target.className !== 'modal-container') return;
        hideModal()
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {};

        for(const [key, value] of formData){
            if(key === 'balance'){
                userLike[key] = +value; // convirtiendo a number, como Number(value)
                continue; // no return, para no salir de la función
            }

            if(key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        // console.log(userLike);
        // TODO: guardar usuario
        hideModal();
    });

    element.append(modal);

}