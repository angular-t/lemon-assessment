import image1 from '../../../assets/food/portokalopita.jpg';
import image2 from '../../../assets/food/taramasalata.jpg';

import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This weeks specials</h1>
        <a className="action-button" href={require('../../../assets/menu.jpg')} target="_blank" rel="noreferrer">Menu</a>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={image1}
          name="Portokalopita"
          price="$1.99"
          description="Suspendisse non augue risus. Sed sollicitudin tincidunt odio ut tristique." />
        <SpecialCard
          image={image2}
          name="Taramasalata"
          price="$1.99"
          description="Aliquam lorem arcu, commodo ac nisi placerat, tristique luctus erat. Aliquam cursus velit ut cursus cursus. " />
      </section>
    </section>
  );
}