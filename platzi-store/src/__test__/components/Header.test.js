import React from "react";
import {mount, shallow} from "enzyme";
import Header from "../../components/Header";
import ProviderMock from "../../__mocks__/ProviderMock";

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del título', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});