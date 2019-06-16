import React from 'react';
import ExpandedList from '../../components/ExpandedList';

class TestScreen extends React.Component<{ navigation: any }, any> {
  render() {
    return <ExpandedList {...this.props} />;
  }
}
export default TestScreen;
