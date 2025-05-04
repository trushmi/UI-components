import { AccordionItem } from "../";

export const accordionMockData: AccordionItem[] = [
  {
    id: 1,
    title: "What is TypeScript?",
    content:
      "TypeScript is a strongly typed superset of JavaScript that adds optional static typing, classes, and interfaces to the language. This enhances code maintainability, reduces runtime errors, and improves overall code quality.",
  },
  {
    id: 2,
    title: "Why should I use TypeScript?",
    content:
      "TypeScript offers numerous benefits, including improved code quality through early error detection, enhanced maintainability by improving code organization and readability, increased developer productivity with features like code completion and refactoring tools, and better collaboration due to improved code communication and shared understanding.",
  },
  {
    id: 3,
    title: "What are the basic data types in TypeScript?",
    content:
      "TypeScript includes all the basic JavaScript data types (number, string, boolean, null, undefined, object, array) and introduces additional types like tuple, enum, any, void, never, and unknown. These types provide a richer type system for more robust and predictable code.",
  },
  {
    id: 4,
    title: "How do I compile TypeScript code to JavaScript?",
    content:
      "The TypeScript compiler (tsc) compiles TypeScript code (*.ts) into JavaScript (*.js). Install it globally (`npm install -g typescript`) and use `tsc filename.ts` to compile a single file or `tsc` to compile all .ts files in the current directory. Configure compiler options in a `tsconfig.json` file for customized compilation behavior.",
  },
  {
    id: 5,
    title: "What are interfaces in TypeScript?",
    content:
      "Interfaces define the shape of objects by specifying their properties and their expected types. They enforce consistency, improve code readability, and enhance code maintainability by providing a clear contract for object structures. For example: `interface User { name: string; age: number; }`.",
  },
  {
    id: 6,
    title: "What are generics in TypeScript?",
    content:
      "Generics allow you to create reusable components that can work with different data types while maintaining type safety. They enable you to write functions, classes, and interfaces that operate on a variety of types without sacrificing type information.",
  },
  {
    id: 7,
    title: "What is type inference in TypeScript?",
    content:
      "Type inference is the ability of the TypeScript compiler to automatically determine the type of a variable based on its value or usage. This reduces the need for explicit type annotations, leading to cleaner and more concise code.",
  },
  {
    id: 8,
    title: "What are type aliases in TypeScript?",
    content:
      "Type aliases create a new name for an existing type. This improves code readability and maintainability by making complex types more concise and easier to understand. For example: `type UserID = string;`.",
  },
  {
    id: 9,
    title: "What are decorators in TypeScript?",
    content:
      "Decorators are a special kind of declaration that can be attached to classes, methods, properties, and parameters. They provide a way to modify or enhance the behavior of the decorated element, such as adding metadata, changing access control, or injecting dependencies.",
  },
  {
    id: 10,
    title: "How do I use external JavaScript libraries in TypeScript?",
    content:
      "To use external JavaScript libraries in TypeScript, install type definitions for them. These type definitions provide the necessary type information for the library, allowing TypeScript to correctly type-check its usage. Type definitions are typically found on DefinitelyTyped and installed via npm with the `@types` scope, for example: `npm install @types/jquery`.",
  },
];
