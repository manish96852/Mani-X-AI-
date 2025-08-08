# MANI X AI - AI Automated Liquidity Management for Hedera

MANI X AI is an AI-powered automated liquidity management protocol built for the Hedera network. It provides intelligent vault strategies using AI agents for SaucerSwap (Uniswap V3) liquidity positions and Bonzo lending protocols, automatically rebalancing positions to optimize yield and minimize impermanent loss.

## ⚡ Quick Commands

**Start Development (Most Common)**
```bash
# Terminal 1: Backend
cd backend && cargo run

# Terminal 2: Frontend  
cd frontend && npm install && npm start
```

**Access URLs**
- Frontend: http://localhost:3000
- Backend API: http://127.0.0.1:8090
- API Docs: http://127.0.0.1:8090/swagger-ui/

**Troubleshooting**
```bash
# Backend issues
cd backend && cargo clean && cargo build

# Frontend issues
cd frontend && rm -rf node_modules && npm install
```

## 📊 Project Status

![Rust](https://img.shields.io/badge/Rust-Backend-orange?logo=rust)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Solidity](https://img.shields.io/badge/Solidity-Contracts-green?logo=solidity)
![Hedera](https://img.shields.io/badge/Hedera-Network-purple)

- ✅ **Backend**: Rust server with AI agent integration
- ✅ **Frontend**: React TypeScript application
- ✅ **Smart Contracts**: Solidity vault contracts  
- ✅ **MCP Server**: AI tools for blockchain operations
- 🔄 **Status**: Active development

## 🏗️ Architecture

The project consists of four main components:

### Backend (Rust)
- **Liquidity Management Engine**: Automated rebalancing logic for vault positions
- **REST API**: HTTP server with Swagger documentation for vault management
- **AI Agent Integration**: Gemini-powered AI agent with MCP (Model Context Protocol) tools
- **Multi-Vault Support**: Concurrent management of multiple liquidity vaults across SaucerSwap and Bonzo
- **Real-time Monitoring**: Continuous monitoring and adjustment of liquidity positions

### Frontend (React/TypeScript)
- **Modern Web Interface**: React-based dashboard with cyberpunk-themed UI
- **Wallet Integration**: Support for HashPack, Blade, Kabila, and MetaMask wallets
- **Real-time Chat**: AI agent interaction through chat interface
- **Vault Management**: Deposit, withdraw, and monitor vault positions
- **Token Balance Tracking**: Real-time display of user token balances

### Smart Contracts (Solidity)
- **ManiXAIVault**: Core vault contract for managing SaucerSwap positions
- **Hedera Integration**: Native support for HBAR and HTS tokens
- **Position Management**: Automated minting, burning, and rebalancing of liquidity positions

### MCP Server (Rust)
- **AI Tool Server**: Model Context Protocol server providing blockchain tools to AI agents
- **Hedera Tools**: Native HBAR balance checking, Bonzo lending operations
- **Token Management**: Support for USDC, SAUCE, and other Hedera tokens

## 🚀 Features

### Core Features
- ✅ **AI-Powered Management**: Gemini AI agent with blockchain-specific tools via MCP
- ✅ **Automated Rebalancing**: Intelligent position management based on market conditions
- ✅ **Multi-Protocol Support**: SaucerSwap liquidity pools and Bonzo lending integration
- ✅ **Multi-Token Support**: Support for HBAR, USDC, SAUCE, and other HTS tokens
- ✅ **Fee Collection**: Automatic collection and reinvestment of trading fees

### Technical Features
- ✅ **Modern Web Interface**: React/TypeScript frontend with cyberpunk UI
- ✅ **Multi-Wallet Support**: HashPack, Blade, Kabila, and MetaMask integration
- ✅ **REST API**: Complete API for vault management and monitoring
- ✅ **AI Chat Interface**: Natural language interaction with AI agent
- ✅ **MCP Integration**: Model Context Protocol for AI tool extensibility
- ✅ **Real-time Updates**: Live token balances and vault status
- ✅ **Swagger Documentation**: Interactive API documentation
- ✅ **Comprehensive Logging**: Structured logging and monitoring
- ✅ **Testnet & Mainnet**: Support for both Hedera testnet and mainnet

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

### System Requirements
- **Rust** (latest stable version)
- **Node.js** (v16 or higher)
- **npm** or **yarn** (for frontend dependencies)
- **Foundry** (for smart contract development)

### Installation Commands

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Install Node.js (using nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

## ⚙️ Configuration

### 1. Environment Variables

Create `.env` files in `backend/`, `contracts/`, `frontend/`, and `mcp/` directories:

#### Backend Environment (`backend/.env`)
```bash
# Copy from example
cp backend/.env.exemple backend/.env

# Edit the file with your values
PRIVATE_KEY="0x..." # Your private key (without 0x prefix)
NETWORK="testnet"   # or "mainnet"
ADMIN_PASSWORD="your_secure_password"
GEMINI_API_KEY="your_gemini_api_key" # For AI agent functionality
```

#### Contracts Environment (`contracts/.env`)
```bash
# Copy from example
cp contracts/.env.exemple contracts/.env

# Edit the file with your values
PRIVATE_KEY="0x..." # Your private key for deployment
```

#### Frontend Environment (`frontend/.env`)
```bash
# Create frontend environment file
REACT_APP_API_BASE_URL="http://127.0.0.1:8090"
REACT_APP_NETWORK="testnet" # or "mainnet"
```

#### MCP Environment (`mcp/.env`)
```bash
# Create MCP environment file
PRIVATE_KEY="0x..." # Your private key for blockchain operations
GEMINI_API_KEY="your_gemini_api_key" # For AI agent functionality
```

### 2. Network Configuration

The project supports both testnet and mainnet configurations:

- **Testnet**: Uses Hedera testnet (Chain ID: 296)
- **Mainnet**: Uses Hedera mainnet (Chain ID: 295)

Network-specific configurations are stored in:
- `backend/src/config/testnet.toml`
- `backend/src/config/mainnet.toml`

## 🏃‍♂️ Quick Start

### Prerequisites Check
Make sure you have the following installed:
- **Rust** (latest stable): `rustc --version`
- **Node.js** (v16+): `node --version`
- **npm/yarn**: `npm --version`
- **Foundry** (optional for contracts): `forge --version`

### Environment Setup

1. **Create Environment Files**
```bash
# Backend environment
cp backend/.env.exemple backend/.env
# Edit backend/.env with your PRIVATE_KEY, NETWORK, ADMIN_PASSWORD, etc.

# Frontend environment  
cp frontend/.env.example frontend/.env
# Edit frontend/.env with your API URLs and network settings

# Contracts environment (if deploying)
cp contracts/.env.exemple contracts/.env
```

### Running Both Frontend and Backend

**Option 1: Run both simultaneously (Recommended)**
```bash
# Open first terminal for backend
cd backend
cargo run

# Open second terminal for frontend  
cd frontend
npm install
npm start
```

**Option 2: Using PowerShell (Windows)**
```powershell
# Start backend in background
cd "backend"; Start-Process powershell -ArgumentList "-Command", "cargo run"

# Start frontend
cd "frontend"; npm install; npm start
```

### 1. Backend Setup (Rust Server)

```bash
# Navigate to backend directory
cd backend

# Install dependencies and build
cargo build

# Run tests (optional)
cargo test

# Start the development server
cargo run

# For production
cargo run --release
```

### 2. Frontend Setup (React App)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### 3. Smart Contracts Setup (Optional)

```bash
# Navigate to contracts directory
cd contracts

# Install dependencies
forge install

# Build contracts
forge build

# Run tests
forge test

# Deploy to testnet
forge script script/DeployManiXAIVault.s.sol --rpc-url hedera_testnet --broadcast

# Deploy to mainnet
forge script script/DeployManiXAIVault.s.sol --rpc-url https://mainnet.hashio.io/api --broadcast
```

### 4. MCP Server Setup (AI Agent Tools)

```bash
# Navigate to MCP directory
cd mcp

# Build the MCP server
cargo build

# Run MCP server (for AI agent tools)
cargo run --features server

# Or run MCP client (for testing)
cargo run --features client
```

### 5. Access the Application

Once both services are running:

**Frontend (React Development Server)**
- **URL**: http://localhost:3000
- **Default Port**: 3000
- **Features**: Full UI with wallet integration, AI chat, vault management

**Backend (Rust API Server)**  
- **Base URL**: http://127.0.0.1:8090
- **Swagger UI**: http://127.0.0.1:8090/swagger-ui/
- **Health Check**: http://127.0.0.1:8090/health
- **API Documentation**: Interactive Swagger interface

**Development Workflow**
1. Backend compiles and starts on port 8090
2. Frontend development server starts on port 3000
3. Both services communicate via REST API
4. Hot reload enabled for both frontend and backend development

**Troubleshooting**
- If backend fails to start: Check `.env` file configuration
- If frontend fails to start: Ensure `npm install` completed successfully
- Port conflicts: Modify ports in configuration files if needed
- Network issues: Verify REACT_APP_API_BASE_URL points to correct backend URL

## 📚 API Documentation

The project provides a comprehensive REST API with the following endpoints:

### Core Endpoints
- `GET /` - Index page
- `GET /health` - Health check
- `GET /vaults` - Get all managed vaults
- `POST /admin/associate-vault-tokens` - Associate tokens to vault (admin only)
- `POST /chat` - Chat with AI agent for liquidity management

### Frontend Routes
- `/` - Landing page with project information
- `/app` - Main application dashboard with AI chat
- `/deposit/:vaultAddress` - Deposit tokens into specific vault
- `/withdraw/:vaultAddress` - Withdraw tokens from specific vault

### Authentication
Admin endpoints require the `ADMIN_PASSWORD` to be provided in the request headers or body.

### AI Agent Features
The AI agent supports natural language commands for:
- Checking token balances
- Managing liquidity positions
- Supplying tokens to Bonzo lending protocol
- Analyzing market conditions
- Providing yield optimization recommendations

### Swagger Documentation
Interactive API documentation is available at http://127.0.0.1:8090/swagger-ui/ when the server is running.

## �️ Development & Troubleshooting

### Common Issues and Solutions

**Backend Issues:**
```bash
# Compilation errors
cargo clean && cargo build

# Dependency issues  
cargo update

# Port already in use
# Change port in backend configuration or kill existing process
netstat -ano | findstr :8090
taskkill /PID <process_id> /F
```

**Frontend Issues:**
```bash
# Node modules issues
rm -rf node_modules package-lock.json
npm install

# React scripts issues
npm install react-scripts@latest

# Port conflicts (change from 3000 to 3001)
set PORT=3001 && npm start
```

**Environment Issues:**
```bash
# Missing .env file
cp .env.example .env
# Then edit .env with your configuration

# Wrong network configuration
# Update NETWORK in backend/.env (testnet/mainnet)
# Update REACT_APP_HEDERA_NETWORK in frontend/.env
```

### Development Workflow

1. **Setup Phase:**
   - Clone repository
   - Create `.env` files from examples
   - Install dependencies (Rust, Node.js)

2. **Development Phase:**
   - Start backend: `cd backend && cargo run`
   - Start frontend: `cd frontend && npm start`
   - Access app at http://localhost:3000

3. **Testing Phase:**
   - Backend tests: `cd backend && cargo test`
   - Frontend tests: `cd frontend && npm test`
   - Contract tests: `cd contracts && forge test`

### Project Structure

```
MANI X AI/
├── backend/                 # Rust backend application
│   ├── src/
│   │   ├── api/            # REST API endpoints  
│   │   ├── config/         # Network configurations (testnet.toml, mainnet.toml)
│   │   ├── core/           # Core business logic & AI agent
│   │   ├── helpers/        # Utility functions
│   │   ├── state/          # Application state management
│   │   ├── strategies/     # Liquidity strategies (AI, basic)
│   │   ├── types.rs        # Type definitions
│   │   └── main.rs         # Application entry point
│   ├── logs/               # Application logs (yieldera.log.*)
│   ├── target/             # Cargo build artifacts
│   ├── Cargo.toml          # Rust dependencies
│   └── .env.exemple        # Environment configuration example
├── frontend/               # React/TypeScript frontend
│   ├── public/             # Static assets (images, fonts, icons)
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components (landing, app, deposit, withdraw)
│   │   ├── services/       # API services & wallet integration
│   │   ├── hooks/          # Custom React hooks
│   │   ├── contexts/       # React contexts (theme, wallet)
│   │   ├── types/          # TypeScript type definitions
│   │   ├── utils/          # Utility functions
│   │   ├── config/         # Frontend configuration
│   │   └── assets/         # Asset files
│   ├── package.json        # Node.js dependencies
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── tsconfig.json       # TypeScript configuration
│   └── .env.example        # Frontend environment example
├── contracts/              # Solidity smart contracts
│   ├── src/                # Contract source code
│   │   ├── ManiXAIVault.sol     # Main vault contract
│   │   ├── YielderaVault.sol    # Alternative vault implementation  
│   │   ├── interfaces/          # Contract interfaces (Uniswap, Hedera)
│   │   └── libraries/           # Utility libraries (math, helpers)
│   ├── script/             # Deployment scripts
│   │   ├── DeployManiXAIVault.s.sol  # Main deployment script
│   │   └── DeployYielderaVault.s.sol # Alternative deployment
│   ├── test/               # Contract tests
│   ├── lib/                # External dependencies (OpenZeppelin)
│   ├── foundry.toml        # Foundry configuration
│   └── .env.exemple        # Contract deployment environment
├── mcp/                    # Model Context Protocol server
│   ├── src/
│   │   ├── tools/          # AI agent tools
│   │   │   ├── balance.rs      # HBAR balance checking
│   │   │   ├── bonzo.rs        # Bonzo lending integration
│   │   │   └── calculator.rs   # Mathematical operations
│   │   ├── config.rs       # MCP configuration
│   │   └── main.rs         # MCP server/client entry point
│   ├── tokens.json         # Token configuration
│   ├── Cargo.toml          # MCP dependencies
│   └── .env               # MCP environment variables
└── README.md              # This file
```

### Key Technologies Used

**Backend Stack:**
- **Rust** - High-performance systems programming
- **Actix-Web** - Web framework and HTTP server
- **Alloy** - Ethereum/Hedera blockchain interaction
- **Tokio** - Async runtime
- **Serde** - Serialization/deserialization
- **Utoipa** - OpenAPI/Swagger documentation

**Frontend Stack:**
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Query** - Data fetching and caching

**Blockchain Stack:**
- **Solidity** - Smart contract language
- **Foundry** - Contract development toolkit
- **Hedera SDK** - Hedera network integration
- **Uniswap V3** - Liquidity pool protocols
```

### Adding New Vaults

To add new vaults to the system:

1. Deploy a new `ManiXAIVault` contract
2. Add the contract address to the appropriate config file:
   - `backend/src/config/testnet.toml` (for testnet)
   - `backend/src/config/mainnet.toml` (for mainnet)
3. Restart the backend service

### AI Agent & MCP Integration

The project features a sophisticated AI agent powered by Google Gemini and Model Context Protocol (MCP):

#### AI Agent Capabilities
- **Natural Language Processing**: Understands user queries about liquidity management
- **Blockchain Operations**: Can check balances, supply tokens, and analyze positions
- **Market Analysis**: Provides insights on yield optimization and risk management
- **Real-time Interaction**: Chat-based interface for seamless user experience

#### MCP Tools Available
- **Balance Checker**: Get native HBAR balance for any account
- **Bonzo Integration**: Supply tokens to Bonzo lending protocol
- **Calculator Tools**: Mathematical operations for yield calculations
- **Token Management**: Support for USDC, SAUCE, and other Hedera tokens

#### Usage Examples
```bash
# Chat with AI agent through frontend or API
"Check my HBAR balance"
"Supply 0.1 HBAR to Bonzo"
"What's the best yield strategy for my portfolio?"
"Analyze current market conditions"
```

### Logging

The application uses structured logging with different levels:
- Logs are written to both console and files
- Log files are stored in `backend/logs/`
- Log level can be controlled via the `RUST_LOG` environment variable
- AI agent interactions are logged for debugging and analysis

## 🧪 Testing

### Backend Tests
```bash
cd backend
cargo test
```

### Frontend Tests
```bash
cd frontend
npm test
# or
yarn test
```

### Smart Contract Tests
```bash
cd contracts
forge test
```

### MCP Server Tests
```bash
cd mcp
cargo test
```

### Integration Tests
```bash
# Run specific backend test
cd backend
cargo test test_rebalance -- --nocapture

# Test AI agent functionality
cd mcp
cargo run --no-default-features --features client
```

### End-to-End Testing
1. Start all services (MCP, Backend, Frontend)
2. Connect wallet in frontend
3. Test AI chat functionality
4. Test vault deposit/withdraw operations

## 🚀 Deployment

### Production Deployment

1. **Prepare Environment**:
   ```bash
   # Set production environment variables
   export NETWORK="mainnet"
   export PRIVATE_KEY="your_mainnet_private_key"
   export ADMIN_PASSWORD="secure_production_password"
   ```

2. **Deploy Contracts**:
   ```bash
   cd contracts
   forge script script/DeployManiXAIVault.s.sol --rpc-url https://mainnet.hashio.io/api --broadcast --verify
   ```

3. **Update Configuration**:
   - Update `backend/src/config/mainnet.toml` with deployed contract addresses
   - Ensure all vault addresses are correct

4. **Build and Run All Components**:
   ```bash
   # Build and run MCP server
   cd mcp
   cargo build --release
   cargo run --no-default-features --features server &

   # Build and run backend (will connect to MCP)
   cd ../backend
   cargo build --release
   ./target/release/mani-x-ai &

   # Build and run frontend
   cd ../frontend
   npm run build
   npm install -g serve
   serve -s build -l 3000
   ```

## 🔒 Security Considerations

- **Private Keys**: Never commit private keys to version control
- **API Keys**: Secure Gemini API keys for AI functionality
- **Admin Password**: Use strong passwords for admin endpoints
- **Network Security**: Consider using HTTPS in production
- **Wallet Security**: Frontend supports secure wallet connections
- **Access Control**: Implement proper access controls for admin functions
- **MCP Security**: MCP server runs locally and doesn't expose sensitive data
- **Environment Variables**: Use proper environment variable management
- **Monitoring**: Set up monitoring and alerting for production deployments

## 🔗 Resources & Links

### Hedera Ecosystem
- [Hedera Network](https://hedera.com/) - The enterprise-grade public ledger
- [SaucerSwap](https://www.saucerswap.finance/) - Hedera's leading DEX and AMM
- [Bonzo Finance](https://bonzo.finance/) - Hedera lending and borrowing protocol
- [HashScan](https://hashscan.io/) - Hedera network explorer

### Development Documentation
- [Foundry Book](https://book.getfoundry.sh/) - Smart contract development
- [Rust Book](https://doc.rust-lang.org/book/) - Rust programming language
- [React Docs](https://react.dev/) - Frontend framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type-safe JavaScript

### AI & Machine Learning
- [Model Context Protocol](https://modelcontextprotocol.io/) - AI tool integration standard
- [Google Gemini API](https://ai.google.dev/) - Advanced AI capabilities
- [Rig Framework](https://github.com/0xPlaygrounds/rig) - Rust AI application framework

### Getting Help
- **Issues**: Report bugs via GitHub Issues
- **Documentation**: Check this README and inline code comments
- **API Reference**: Swagger UI at http://127.0.0.1:8090/swagger-ui/
- **Community**: Join Hedera Discord for ecosystem support

---

**Built with ❤️ for the Hedera ecosystem**

*This project demonstrates the power of combining AI agents with DeFi protocols for automated liquidity management.*
