type Align = 'start' | 'end';
type Placement = 'top' | 'right' | 'bottom' | 'left';
type BaseAnchorProps = {
  /**
   * The `gap` is the space between the trigger and the panel.
   */
  gap: number | string;
  /**
   * The `offset` is the amount the panel should be nudged from its original position.
   */
  offset: number | string;
  /**
   * The `padding` is the minimum space between the panel and the viewport.
   */
  padding: number | string;
};

export type AnchorProps =
  | false
  | (`${Placement}` | `${Placement} ${Align}`)
  | Partial<
      BaseAnchorProps & {
        /**
         * The `to` value defines which side of the trigger the panel should be placed on and its
         * alignment.
         */
        to: `${Placement}` | `${Placement} ${Align}`;
      }
    >;
