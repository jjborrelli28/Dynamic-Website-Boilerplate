import dynamic from 'next/dynamic'

const SocialIcons = {
  GitHub: dynamic(() => import('@mui/icons-material/GitHub')),
  LinkedIn: dynamic(() => import('@mui/icons-material/LinkedIn')),
  Facebook: dynamic(() => import('@mui/icons-material/Facebook')),
  Instagram: dynamic(() => import('@mui/icons-material/Instagram')),
  Twitter: dynamic(() => import('@mui/icons-material/Twitter')),
  X: dynamic(() => import('@mui/icons-material/X')),
  YouTube: dynamic(() => import('@mui/icons-material/YouTube')),
  WhatsApp: dynamic(() => import('@mui/icons-material/WhatsApp')),
}

const FunctionalIcons = {
  ArrowForward: dynamic(() => import('@mui/icons-material/ArrowForward')),
  ArrowBack: dynamic(() => import('@mui/icons-material/ArrowBack')),
  ArrowUpward: dynamic(() => import('@mui/icons-material/ArrowUpward')),
  ArrowDownward: dynamic(() => import('@mui/icons-material/ArrowDownward')),
  Add: dynamic(() => import('@mui/icons-material/Add')),
  Delete: dynamic(() => import('@mui/icons-material/Delete')),
  Edit: dynamic(() => import('@mui/icons-material/Edit')),
  Check: dynamic(() => import('@mui/icons-material/Check')),
  Close: dynamic(() => import('@mui/icons-material/Close')),
  Search: dynamic(() => import('@mui/icons-material/Search')),
  Success: dynamic(() => import('@mui/icons-material/CheckCircle')),
  Warning: dynamic(() => import('@mui/icons-material/Warning')),
  Error: dynamic(() => import('@mui/icons-material/Error')),
  Info: dynamic(() => import('@mui/icons-material/Info')),
}

const DynamicIcon = {
  ...SocialIcons,
  ...FunctionalIcons,
}

export default DynamicIcon
