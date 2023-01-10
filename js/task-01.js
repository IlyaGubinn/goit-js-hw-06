
    const categoriesRef = document.querySelector('#categories');

 console.log(
        'Number of categories:', categoriesRef.children.length);
    
const itemRef = categoriesRef.querySelectorAll('.item');

itemRef.forEach(el => {
    const categoryTitle = el.querySelector(`h2`);
    const categoryElements = el.querySelector(`ul`);
    
    console.log(`Category: `, categoryTitle.textContent);
    console.log(`Elements: `, categoryElements.children.length)

} );


