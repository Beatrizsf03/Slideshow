'use strict';

        const images = [
            { 'id': '1', 'url':'./images/mist.jpg' },
            { 'id': '1', 'url':'./images/books.jpg' },
            { 'id': '1', 'url':'./images/writing.jpg' }
        ]

        const containerItems = document.querySelector('#container-items');
        
        
        const loadImages = ( images, container ) => {
            images.forEach ( image => {
                container.innerHTML += `
                <div class='item'>
                    <img src='${image.url}'>
                    </div> 
                    `
                })
            }
            
            loadImages( images, containerItems );

            let items = document.querySelectorAll('.item');

            const antes = () => {
                containerItems.appendChild(items[0]);
                items = document.querySelectorAll('.item');
            }

            const next = () => {
                const lastItem = items[items.length -1];
                containerItems.insertBefore( lastItem, items[0] );
                items = document.querySelectorAll('.item');
            }

            document.querySelector('#antes').addEventListener('click', antes);
            document.querySelector('#next').addEventListener('click', next);
