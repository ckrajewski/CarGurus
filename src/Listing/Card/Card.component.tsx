import React from 'react';
import { CardContent, CardWrapper } from './Card.styles';

interface OwnProps {
  car: any;
}
const Card = ({ car }: OwnProps) => {
  if (!Object.keys(car).length) {
    return <div />;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { model, primary_photo_url } = car;
  return (
    <CardWrapper>
      <CardContent>
        <div>
          <img width={200} height={200} src={primary_photo_url} />
        </div>
        <div>{model}</div>
      </CardContent>
    </CardWrapper>
  );
};
export default Card;
