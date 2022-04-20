
//creo una nuova istanza dell'oggetto Vue
const app = new Vue (
    {   
        //options object

        //creo proprietà el che ci permette di creare il collegamento con il nostro markup
        el:'#app',

        //data object
        data: { 

            //inserisco le proprietà ed i valori che saranno inseriti nella Dom

            message: 'Hello, this is a laptop!',
            url_img: './assets/img/laptop.webp',
            txt_img:'laptop'


        },
    }
)