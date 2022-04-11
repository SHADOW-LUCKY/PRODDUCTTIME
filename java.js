document.getElementById('product-form').addEventListener('submit', formobt)
document.getElementById('product-list').addEventListener('click', del)

class Product {
 constructor(name, price, year, tmons, description) {
  this.name = name
  this.price = price
  this.year = year
  this.tmons = tmons
  this.description = description
 }
}
class UI {
 addproduct(product) {
  const productlist = document.getElementById('product-list')
  const element = document.createElement('div')
  element.innerHTML = `
           <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}-
                    <strong>Price</strong>: ${product.price}${product.tmons}-
                    <strong>Year</strong>: ${product.year}
                    <hr>
                    <p>${product.description}</p>
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
           </div>
           `
  productlist.appendChild(element)
  this.resetform()
 }
 resetform() {
  document.getElementById('product-form').reset()
 }
 delproduct(element) {
  if (element.name === 'delete') {
   console.log(element.parentElement.parentElement.parentElement.remove())
   this.showmessage('product deleted successfully', 'danger')
  }
 }
 showmessage(message, CSSc) {
  const div = document.createElement('div')
  div.className = `alert alert-dismissible alert-${CSSc} mt-4`
  div.appendChild(document.createTextNode(message))
  const container = document.querySelector('.container')
  const app = document.querySelector('#App')
  container.insertBefore(div, app)
  setTimeout(function () {
   document.querySelector('.alert').remove()
  }, 3000)
 }
}
//eventos dom
function formobt(e) {
 e.preventDefault()
 const description = document.getElementById('description').value
 const name = document.getElementById('name').value
 const price = document.getElementById('price').value
 const year = document.getElementById('year').value
 const tmons = document.getElementById('tmons').value
 const product = new Product(name, price, year, tmons, description)
 const ui = new UI()
 if (name === '' || price === '' || year === '' || tmons === 'N/A') {
  return ui.showmessage('Please Insert data in all fields', 'warning')
 }
 ui.addproduct(product)
 ui.resetform()
 ui.showmessage('product succesfully inserted', 'success')
}

function del(e) {
 const ui = new UI()
 ui.delproduct(e.target)
}
