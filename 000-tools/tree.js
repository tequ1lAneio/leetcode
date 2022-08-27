function BinarySearchTree() {
  const Node = function(val) {
    this.val = val
    this.left = null
    this.right = null
  }

  let root = null

  this.insert = function(val) {
    const newNode = new Node(val)

    const insertNode = function(node) {
      if (newNode.val < node.val) {
        if (!node.left) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (!node.right) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }

    if (!root) {
      root = newNode
    } else {
      insertNode(root, newNode);
    }
  }

  this.inOrderTraverse = function(fn) {
    const inOrderTraverseNode = function(node, fn) {
      if (node) {
        inOrderTraverseNode(node.left, fn)
        fn(node.val)
        inOrderTraverseNode(node.right, fn)
      }
    }

    inOrderTraverseNode(root, fn)
  }

  this.preOrderTraverse = function(fn) {
    const preOrderTraverseNode = function(node, fn) {
      if (node) {
        fn(node.val)
        preOrderTraverseNode(node.left, fn)
        preOrderTraverseNode(node.right, fn)
      }
    }

    preOrderTraverseNode(root, fn)
  }

  this.postOrderTraverse = function(fn) {
    const postOrderTraverseNode = function(node, fn) {
      if (node) {
        postOrderTraverseNode(node.left, fn)
        postOrderTraverseNode(node.right, fn)
        fn(node.val)
      }
    }

    postOrderTraverseNode(root, fn)
  }

  this.search = function(val) {
    const searchNode = function(node) {
      if (!node) {
        return false
      }

      if (val < node.val) {
        return searchNode(node.left)
      } else if (val > node.val) {
        return searchNode(node.right)
      } else {
        return true
      }
    }

    return searchNode(root)
  }

  this.min = function() {
    const minNode = function(node) {
      if (node) {
        while (node && node.left) {
          node = node.left
        }
        return node.val
      } else {
        return null
      }
    }

    return minNode(root)
  }

  this.max = function() {
    const maxNode = function(node) {
      if (node) {
        while (node && node.right) {
          node = node.right
        }
        return node.val
      } else {
        return null
      }
    }

    return maxNode(root)
  }

  this.remove = function(val) {
    const findMinNode = function(node) {
      while (node && node.left) {
        node = node.left
      }
      return node
    }
    const removeNode = function(node, val) {
      if (!node) {
        return null
      }

      if (node.val > val) {
        node.left = removeNode(node.left, val)
        return node
      } else if (node.val < val) {
        node.right = removeNode(node.right, val)
        return node
      } else {
        // for a leaf node
        if (!node.left & !node.right) {
          node = null
          return node
        }

        // for nodes only 1 son
        if (!node.left) {
          node = node.right
          return node
        } else if (!node.right) {
          node = node.left
          return node
        }

        // for nodes with 2 sons
        const aux = findMinNode(node.right)
        node.val = aux.val
        node.right = removeNode(node.right, aux.val)
        return node
      }
    }

    return removeNode(root, val)
  }

  this.printNode = function(value) {
    console.log(value)
  }
}

const tree = new BinarySearchTree()

module.exports = {
  initTree(arr) {
    const tree = new BinarySearchTree()
    return tree
  }
}
