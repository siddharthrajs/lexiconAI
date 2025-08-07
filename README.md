# 🧠 LLM Document Query Interface

An intuitive web application that allows users to upload documents and ask questions about their content, powered by advanced Language Learning Models (LLMs). Get AI-powered insights from your documents with ease.

## 🌟 Features

- **Document Upload**: Drag and drop or browse to upload PDF, DOC, TXT, and other document formats
- **Question Interface**: Ask multiple questions about your uploaded documents
- **AI-Powered Insights**: Get accurate, context-aware answers from your documents
- **User-Friendly UI**: Clean, responsive interface built with React and TailwindCSS
- **Real-time Processing**: Instant results from our powerful LLM backend

## 🛠️ Technologies Used

- **Frontend**: React, Vite, TailwindCSS
- **UI Components**: react-dropzone, react-icons
- **State Management**: React Hooks
- **Build Tool**: Vite
- **API**: External LLM service endpoint

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/llm-query-ui.git
   ```

2. Navigate to the project directory:
   ```bash
   cd llm-query-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production build:
```bash
npm run build
```
or
```bash
yarn build
```

To preview the production build locally:
```bash
npm run preview
```
or
```bash
yarn preview
```

## 📖 Usage

1. **Upload Documents**: 
   - Drag and drop files onto the upload area, or click to browse
   - Supported formats include PDF, DOC, TXT, and more

2. **Ask Questions**:
   - Enter your questions in the input fields
   - You can add multiple questions using the "Add Question" button

3. **Submit**:
   - Click the "Submit Query" button to process your documents and questions
   - Wait for the AI to analyze your content and generate responses

4. **View Results**:
   - Results will appear below the form with answers to each question
   - Answers are generated based on the content of your uploaded documents

## 🔌 API Information

The application connects to an external API endpoint for processing queries:
```
https://hackrx-llm-api-sj2g.onrender.com/api/query
```

This endpoint handles document processing and question answering using advanced LLM technology.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on this repository.
