import Alpine from 'alpinejs'
import card from './components/card';
import 'flowbite';
import home from './pages/home';

window.Alpine = Alpine;

// Components
Alpine.data('card', card);


// Pages
Alpine.data('home', home);

Alpine.start()