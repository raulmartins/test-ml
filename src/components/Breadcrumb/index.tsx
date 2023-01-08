import Style from './breadcrumb.module.scss';

type Breadcrumbs = {
  items: string[];
};

function Breadcrumb(props: Breadcrumbs) {
  const { items } = props;

  return (
    <nav className={Style.nav} aria-label='breadcrumb'>
      <ol className={Style.breadcrumb}>
        {items.map((item, index) => {
          const key = `tag-li-${index}`;
          return (
            <li
              key={key}
              className={
                index === items.length - 1
                  ? `${Style.breadcrumbItem} ${Style.active}`
                  : `${Style.breadcrumbItem}`
              }
            >
              {item}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumb };
