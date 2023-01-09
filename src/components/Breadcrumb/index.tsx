import Style from './breadcrumb.module.scss';

type Props = {
  categories: string[];
};

function Breadcrumb(props: Props) {
  const { categories = [] } = props;

  return (
    <nav className={Style.nav} aria-label='breadcrumb'>
      <ol className={Style.breadcrumb}>
        {categories.map((category, index) => {
          const key = `tag-li-${index}`;
          return (
            <li
              key={key}
              className={
                index === categories.length - 1
                  ? `${Style.breadcrumbItem} ${Style.active}`
                  : `${Style.breadcrumbItem}`
              }
            >
              {category}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumb };
