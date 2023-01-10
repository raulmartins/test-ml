import Styles from './styles.module.scss';

type Props = {
  categories: string[];
};

function Breadcrumb(props: Props) {
  const { categories = [] } = props;

  return (
    <nav
      data-testid='breadcrumb'
      className={Styles.nav}
      aria-label='breadcrumb'
    >
      <ol className={Styles.breadcrumb}>
        {categories.map((category, index) => {
          const key = `tag-li-${index}`;
          return (
            <li
              key={key}
              className={
                index === categories.length - 1
                  ? `${Styles.breadcrumbItem} ${Styles.active}`
                  : `${Styles.breadcrumbItem}`
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
