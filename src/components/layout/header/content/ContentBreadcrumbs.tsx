import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Icon } from '../../../Icon';

export default function ContentBreadcrumbs() {
  const location = useLocation();

  const breadcrumbItems = useMemo(() => {
    const paths = location.pathname.split('/').filter(x => x);
    const breadcrumbs = paths.map((path, index) => {
      const to = `/${paths.slice(0, index + 1).join('/')}`;
      return { name: path, to };
    });

    return breadcrumbs;
  }, [location.pathname]);

  const breadcrumbActive = breadcrumbItems[breadcrumbItems.length - 1];

  return (
    <div className='flex mb-2'>
      {breadcrumbItems.map((breadcrumb, index) => (
        <li key={index} className='flex items-center'>
          <Link to={breadcrumb.to}>
            <StyledLink active={breadcrumbActive.to === breadcrumb.to}>{breadcrumb.name}</StyledLink>
          </Link>
          {index + 1 < breadcrumbItems.length && <Icon icon='LuChevronRight' size='xs' />}
        </li>
      ))}
    </div>
  );
}

const StyledLink = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.font_size['sm']} /* text-decoration: ${({ active }) =>
    active ? 'none' : 'underline'}; */
  /* color: ${({ theme, active }) => (active ? theme.text_color.dark_gray : theme.colors.link)}; */

  &:hover {
    text-decoration: underline;
  }
`;
