import React, { useEffect, useState } from "react";
import Display from "../Display";
import FormulaScreen from "../FormulaScreen";
import KeyPad from "../KeyPad";

import * as math from "mathjs";

import "./styles.scss";

const Calculator = () => {
  const [content, setContent] = useState(["0"]);
  const [formula, setFormula] = useState("0");
  const [value, setValue] = useState("0");
  const [aux, setAux] = useState(false);
  const [decimal, setDecimal] = useState(false);

  const changeContent = (key) => {
    switch (key) {
      case "AC":
        setContent(["0"]);
        setFormula("0");
        setAux(false);
        setDecimal(false);
        break;

      case ".":
        if (!decimal) {
          if (content[content.length - 1] === ".") {
            setContent([...content]);
            setFormula(formula);
          } else {
            setContent([...content, key]);
            setFormula(formula + key);
          }
        }
        break;

      default:
        if (!aux) {
          if (content[0] === "0") {
            setContent([key]);
            setFormula([key]);
          } else {
            if (key === "+" || key === "-" || key === "X" || key === "/") {
              if (decimal) setDecimal(false);
              if (content[content.length - 1] === "-") {
                if (
                  content[content.length - 2] === "-" ||
                  content[content.length - 2] === "+" ||
                  content[content.length - 2] === "*" ||
                  content[content.length - 2] === "/"
                ) {
                  content.pop();
                  content.pop();
                  setFormula(formula.substring(0, formula.length - 2) + key);
                } else if (key !== "-") {
                  content.pop();
                  setFormula(formula.substring(0, formula.length - 1) + key);
                } else {
                  setFormula(formula + key);
                }
              } else if (
                content[content.length - 1] === "+" ||
                content[content.length - 1] === "*" ||
                content[content.length - 1] === "/"
              ) {
                if (key !== "-") {
                  content.pop();
                  setFormula(formula.substring(0, formula.length - 1) + key);
                } else {
                  setFormula(formula + key);
                }
              } else {
                setFormula(formula + key);
              }

              if (key === "X") {
                setContent([...content, "*"]);
              } else {
                setContent([...content, key]);
              }
            } else {
              setContent([...content, key]);
              setFormula(formula + key);
            }
          }
        } else if (key !== "=") {
          setAux(false);
          if (key === "+" || key === "-" || key === "X" || key === "/") {
            setDecimal(false);
            if (
              !(
                content[content.length - 1] === "+" ||
                content[content.length - 1] === "*" ||
                content[content.length - 1] === "/"
              ) ||
              key === "-"
            ) {
              if (key === "X") {
                setContent([value + "", "*"]);
              } else {
                setContent([value + "", key]);
              }
              setFormula(value + key);
            }
          } else {
            setContent([key]);
            setFormula([key]);
          }
        }
        break;
    }
  };

  useEffect(() => {
    //console.log(content);
    if (content[content.length - 1] === "=") {
      content.pop();
      const result = content.join("");
      //console.log(resultado);
      try {
        const res = math.round(math.evaluate(result), 12);
        setValue(res);
        if (!aux) {
          setAux(true);
          setFormula(formula + res);
        } else {
          setFormula(formula.substring(0, formula.length - 1));
        }
      } catch (error) {
        setValue("Sintaxis Error");
      }
    } else {
      if (!aux) {
        const val = content[content.length - 1];
        if (
          val === "+" ||
          val === "-" ||
          val === "*" ||
          val === "/" ||
          value === "0" ||
          content[0] === "0"
        ) {
          setValue(val);
        } else {
          if (val === "." && !decimal) {
            setValue(value + ".");
            setDecimal(true);
          } else if (val !== ".") {
            setValue(value + val);
          }
        }
      } else {
        setContent(["0"]);
        setAux(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div className="calculator">
      <FormulaScreen content={formula} />
      <Display content={value} />
      <KeyPad changeContent={changeContent} />
    </div>
  );
};

export default Calculator;
