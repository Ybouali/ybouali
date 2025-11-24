import type { Pages } from '../../types';

type Props = {
    page: Pages;
};

function ItemNavBar({ page }: Props) {
    return <div>{page.page_name}</div>;
}

export default ItemNavBar;
