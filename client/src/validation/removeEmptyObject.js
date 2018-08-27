
import _ from 'lodash';

const removeEmptyObjects = (obj) => {
    return _(obj)
      .pickBy(_.isObject)
      .mapValues(removeEmptyObjects)
      .omitBy(_.isEmpty)
      .assign(_.omitBy(obj, _.isObject))
      .value();
  }

  export default removeEmptyObjects;