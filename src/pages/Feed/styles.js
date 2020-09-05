import styled from 'styled-components/native';

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 16px;
`;

export const Name = styled.Text`
  color: #333333;
  font-weight: bold;
`;

export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999999',
})`
  margin: 30px 0;
`;
