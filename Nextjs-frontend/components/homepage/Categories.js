import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { id: 1, name: 'Houses', icon: 'c1.png' },
  { id: 2, name: 'cars', icon: 'c6.png' },
  { id: 3, name: 'Smart Phones', icon: 'c5.png' },
  { id: 4, name: 'Books', icon: 'c7.png' },
  { id: 5, name: 'Furniture', icon: 'c8.png' },
  { id: 6, name: 'Garden Tools', icon: 'c2.png' },
  { id: 7, name: 'kitchenware', icon: 'c3.png' },
  { id: 8, name: 'Computers', icon: 'c4.png' },
  { id: 9, name: 'light fixtures', icon: 'c9.png' },
  { id: 10, name: 'Motorcyles', icon: 'c10.png' },
  { id: 11, name: 'electronics', icon: 'c11.png' },
];

function Categories() {



  


  function handleCategoryId(id,category_type){
    localStorage.setItem("categoryId",id)
    localStorage.setItem("category_type",category_type)
    
  }


  
  return (
    <section className="categories" id="categories">
      <h2>Explore Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <Link className='catLink' href="/productOnCategory">
          <div key={category.id} className="category" onClick={()=>handleCategoryId(category.id,category.name)}>
            <Image src={`/icons/${category.icon}`} alt={category.name} width={48} height={48} />
            <h3>{category.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
