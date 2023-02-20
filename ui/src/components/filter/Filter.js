import React, { useEffect, useState } from "react";
import "./Filter.scss";
import { BiDownArrow } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const Filter = ({ placeHolder, options, isMulti }) => {
  const createOption = options.map((el, index) => {
    return { id: index, label: el };
  });

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }
    if (isMulti) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option) => (
            <div key={option.id} className="dropdown-tag-item">
              {option}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <ImCross />
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectedValue.label;
  };
  const removeOption = (option) => {
    return selectedValue.filter((o) => o.id !== option.id);
  };
  const onTagRemove = (e, option) => {
    e.stopPropagation();
    setSelectedValue(removeOption(option));
  };

  const onItemClick = (option) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.id === option.id) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option.label];
      }
    } else {
      newValue = option.label;
    }
    setSelectedValue(newValue);
  };

  const isSelected = (option) => {
    if (isMulti) {
      return selectedValue.filter((o) => o.label === option.label).length > 0;
    }
    if (!selectedValue) {
      return false;
    }
    return selectedValue.label === option.label;
  };

  return (
    <div>
      <div className="dropdown-container">
        <div onClick={handleInputClick} className="dropdown-input">
          {showMenu && (
            <div className="dropdown-menu">
              {createOption.map((option) => (
                <div
                  onClick={() => onItemClick(option)}
                  key={option.id}
                  className={`dropdown-item ${
                    isSelected(option) && "selected"
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <BiDownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <label className="drop-down">
    //   {" "}
    //   Pick Type:
    //   <select>
    //     <option value="outdoor">outdoor</option>
    //     <option value="indoor">indoor</option>
    //     <option value="free">free</option>
    //     <option value="fine-motor-skills">fine motor skills</option>
    //     <option value="gross-motor-skills">gross motor skills</option>
    //   </select>
    // </label>
  );
};

export default Filter;
