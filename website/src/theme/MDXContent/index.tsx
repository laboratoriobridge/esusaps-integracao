import React, {type ReactNode} from 'react';
import MDXContent from '@theme-original/MDXContent';
import type MDXContentType from '@theme/MDXContent';
import type {WrapperProps} from '@docusaurus/types';
import {NumberedItemsScope} from '@site/src/components/NumberedItem';

type Props = WrapperProps<typeof MDXContentType>;

export default function MDXContentWrapper(props: Props): ReactNode {
  return (
    <NumberedItemsScope>
      <MDXContent {...props} />
    </NumberedItemsScope>
  );
}
