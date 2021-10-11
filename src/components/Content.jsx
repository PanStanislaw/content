import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ content }) => {
  return (
    <div className="content">
      {content.map(
        (element) =>
          ({
            panel: (
              <div
                className="panel"
                key={`${element.type}${Math.random()}`}
                style={{
                  width: Number(element.props.width),
                  height: Number(element.props.height),
                  display: element.props.visible ? 'block' : 'none',
                }}>
                {element.content ? <Content content={element.content} /> : null}
              </div>
            ),
            label: (
              <span
                key={`${element.type}${Math.random()}`}
                style={{ display: element.props.visible ? 'block' : 'none' }}>
                {element.props.caption}
              </span>
            ),
            button: (
              <button
                key={`${element.type}${Math.random()}`}
                style={{
                  width: Number(element.props.width),
                  height: Number(element.props.height),
                  display: element.props.visible ? 'block' : 'none',
                }}>
                {element.props.caption}
              </button>
            ),
          }[element.type]),
      )}
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['label', 'button', 'panel']),
      props: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        caption: PropTypes.string,
        visible: PropTypes.bool,
        content: PropTypes.array,
      }),
    }),
  ),
};

export default Content;
