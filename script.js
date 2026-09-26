const PRODUCTS = [
 {n:"Wooden Sofa",c:"Wooden Sofas",d:"Classic solid-wood sofa frame with premium cushioning, built for everyday family use.",dim:"70\" x 30\" x 34\"",price:"₹24,999 onwards",ic:"sofa"},
 {n:"3 Seater Wooden Sofa",c:"3 Seater Sofas",d:"Spacious three-seater with a solid wood frame and clean, classic lines.",dim:"72\" x 30\" x 34\"",price:"₹27,999 onwards",ic:"sofa"},
 {n:"2 Seater Wooden Sofa",c:"2 Seater Sofas",d:"Compact handcrafted sofa, ideal for cosy living rooms and balconies.",dim:"54\" x 30\" x 34\"",price:"₹18,999 onwards",ic:"sofa"},
 {n:"3+2 Sofa Set",c:"3+2 Sofa Sets",d:"Our best-selling combination set with premium upholstery and carved arms.",dim:"3-Seater 72\" + 2-Seater 54\"",price:"₹44,999 onwards",ic:"sofa"},
 {n:"5 Seater Sofa Set",c:"5 Seater Sofa Sets",d:"Complete living room set combining 3-seater and 2-seater in matching finish.",dim:"Set of 2 sofas, custom sizing",price:"Get Price",ic:"sofa"},
 {n:"Wooden Carving Sofa",c:"Wooden Carving Sofas",d:"Intricately hand-carved sofa showcasing traditional Indian woodwork.",dim:"75\" x 32\" x 36\"",price:"₹38,999 onwards",ic:"sofa"},
 {n:"Wooden Maharaja Chair",c:"Maharaja Chairs",d:"Royal hand-carved armchair inspired by Rajasthani palace furniture.",dim:"28\" x 28\" x 42\"",price:"₹12,999 onwards",ic:"chair"},
 {n:"Wooden Carving Chair",c:"Wooden Carving Chairs",d:"Single accent chair with detailed carving, finished in walnut polish.",dim:"26\" x 26\" x 40\"",price:"₹8,999 onwards",ic:"chair"},
 {n:"Dining Set (6-Seater)",c:"Dining Sets",d:"Solid wood dining table with six matching hand-carved chairs.",dim:"72\" x 36\" x 30\" table",price:"Get Price",ic:"dining"},
 {n:"Wooden Bed (King Size)",c:"Wooden Beds",d:"Sturdy solid wood bed frame with carved headboard and under-bed storage.",dim:"78\" x 72\" x 40\"",price:"₹32,999 onwards",ic:"bed"},
 {n:"Wooden Cabinet",c:"Wooden Cabinets",d:"Multi-shelf storage cabinet with traditional detailing, great for any room.",dim:"36\" x 18\" x 60\"",price:"₹15,999 onwards",ic:"storage"},
 {n:"Wooden Sideboard",c:"Wooden Sideboards",d:"Elegant sideboard with drawers and cabinets for dining or living spaces.",dim:"60\" x 18\" x 32\"",price:"₹21,999 onwards",ic:"storage"},
 {n:"Wooden Console",c:"Wooden Consoles",d:"Slim entryway console table with carved legs, perfect for hallways.",dim:"48\" x 16\" x 32\"",price:"₹10,999 onwards",ic:"storage"},
 {n:"Wooden Almirah",c:"Wooden Almirahs",d:"Spacious wardrobe with mirror panel and hand-finished wooden doors.",dim:"48\" x 24\" x 78\"",price:"₹26,999 onwards",ic:"storage"},
 {n:"Wooden Partition",c:"Wooden Partitions",d:"Hand-carved jali-style room divider, custom sized for any interior.",dim:"Custom size available",price:"Get Price",ic:"partition"},
];
const CATEGORIES = ["All", ...PRODUCTS.map(p=>p.c)];

const ICONS = {
 sofa:'<path d="M20 130h160v10H20z" fill="#3B241A" opacity=".8"/><path d="M40 130V60q0-14 14-14h92q14 0 14 14v70" fill="none" stroke="#3B241A" stroke-width="8" opacity=".8"/><rect x="50" y="70" width="100" height="35" rx="4" fill="#F7F1E6" opacity=".5"/>',
 chair:'<path d="M70 30h60v70H70z" fill="none" stroke="#3B241A" stroke-width="8" opacity=".8"/><path d="M65 100h70v10H65zM75 110l-6 30M125 110l6 30" stroke="#3B241A" stroke-width="7" fill="none" opacity=".8"/><rect x="72" y="55" width="56" height="35" rx="4" fill="#F7F1E6" opacity=".5"/>',
 dining:'<ellipse cx="100" cy="70" rx="70" ry="16" fill="#F7F1E6" opacity=".5" stroke="#3B241A" stroke-width="6"/><path d="M60 84v40M140 84v40" stroke="#3B241A" stroke-width="8" opacity=".8"/><path d="M30 130h30M140 130h30" stroke="#3B241A" stroke-width="6" opacity=".6"/>',
 bed:'<rect x="30" y="70" width="140" height="45" rx="4" fill="#F7F1E6" opacity=".5" stroke="#3B241A" stroke-width="6"/><path d="M30 70v-25h25v25" fill="none" stroke="#3B241A" stroke-width="7"/><path d="M30 115v20M170 115v20" stroke="#3B241A" stroke-width="8"/>',
 storage:'<rect x="45" y="30" width="110" height="95" rx="3" fill="none" stroke="#3B241A" stroke-width="7"/><path d="M100 30v95M45 65h110M45 95h110" stroke="#3B241A" stroke-width="4" opacity=".6"/><circle cx="80" cy="80" r="3" fill="#3B241A"/><circle cx="120" cy="80" r="3" fill="#3B241A"/>',
 partition:'<path d="M40 20v110M100 20v110M160 20v110" stroke="#3B241A" stroke-width="7"/><path d="M40 45h60M100 45h60M40 75h60M100 75h60M40 105h60M100 105h60" stroke="#3B241A" stroke-width="4" opacity=".55"/>'
};
function phSVG(ic){ return `<svg viewBox="0 0 200 150">${ICONS[ic]||ICONS.sofa}</svg>`; }
function card(p){
 const msg = encodeURIComponent("Hi Sun Handicraft, I'm interested in the "+p.n+". Please share price and details.");
 return `<div class="card" data-cat="${p.c}"><div class="ph ph-${p.ic}">${phSVG(p.ic)}</div><div class="card-body">
   <h3>${p.n}</h3><p class="desc">${p.d}</p>
   <div class="dims">Dimensions: ${p.dim}</div>
   <div class="price">${p.price}</div>
   <a class="btn btn-wa" href="https://wa.me/918433008809?text=${msg}" target="_blank">💬 Enquire on WhatsApp</a>
 </div></div>`;
}
document.getElementById('products-grid').innerHTML = PRODUCTS.map(card).join('');
document.getElementById('featured-grid').innerHTML = PRODUCTS.slice(0,3).map(card).join('');
document.getElementById('cat-tabs').innerHTML = CATEGORIES.map((c,i)=>
 `<div class="cat-tab${i===0?' active':''}" onclick="filterCat('${c}',this)">${c}</div>`).join('');
function filterCat(cat, el){
 document.querySelectorAll('.cat-tab').forEach(t=>t.classList.remove('active'));
 el.classList.add('active');
 document.querySelectorAll('#products-grid .card').forEach(card=>{
   card.style.display = (cat==='All' || card.dataset.cat===cat) ? '' : 'none';
 });
}

function go(p){
 document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
 document.getElementById('page-'+p).classList.add('active');
 document.querySelectorAll('#navlinks a').forEach(a=>a.classList.toggle('active', a.dataset.p===p));
 document.getElementById('mnav').style.display='none';
 window.scrollTo(0,0);
 history.replaceState(null,'','#'+p);
}
const start = location.hash.replace('#','') || 'home';
if(document.getElementById('page-'+start)) go(start);
