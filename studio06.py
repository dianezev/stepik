#Exercise from Udacity https://classroom.udacity.com/courses/ud513/lessons/7114284829/concepts/79348548570923

#Methods completed by Diane Z below are: get_edge_list, get_adjacency_list and get_adjacency_matrix.
#	Other code provided by Udacity

class Node(object):
    def __init__(self, value):
        self.value = value
        self.edges = []

class Edge(object):
    def __init__(self, value, node_from, node_to):
        self.value = value
        self.node_from = node_from
        self.node_to = node_to

class Graph(object):
    def __init__(self, nodes=[], edges=[]):
        self.nodes = nodes
        self.edges = edges

    def insert_node(self, new_node_val):
        new_node = Node(new_node_val)
        self.nodes.append(new_node)
        
    def insert_edge(self, new_edge_val, node_from_val, node_to_val):
        from_found = None
        to_found = None
        for node in self.nodes:
            if node_from_val == node.value:
                from_found = node
            if node_to_val == node.value:
                to_found = node
        if from_found == None:
            from_found = Node(node_from_val)
            self.nodes.append(from_found)
        if to_found == None:
            to_found = Node(node_to_val)
            self.nodes.append(to_found)
        new_edge = Edge(new_edge_val, from_found, to_found)
        from_found.edges.append(new_edge)
        to_found.edges.append(new_edge)
        self.edges.append(new_edge)

    def get_edge_list(self):
        answer = []
        for edge in self.edges:
            triple = (edge.value, edge.node_from.value, edge.node_to.value)
            answer.append(triple)
        return answer

    def get_adjacency_list(self):
        # Diane question: I don't get why udacity wants
        # an answer that reflects a null node for element 0.
        # Their answer is looking for 
        # [None, [(2, 100), (3, 101), (4, 102)], None, [(4, 103)], None]
        # so I use maxVal to force it to include elements for 0 - max
        # (even though there is no connected node with value 0)
        maxVal = 0
        for node in self.nodes:
            maxVal = max(maxVal, node.value)
            
        answer = [None] * (maxVal + 1)
        part = []
        tuple = None
        
        for node in self.nodes:
            for edge in node.edges:
                if edge.node_to.value != node.value:
                    tuple = (edge.node_to.value, edge.value)
                    part.append(tuple)
            if len(part) != 0:
                answer[edge.node_from.value] = part
                part = []
                tuple = None
            
        return answer
    
    def get_adjacency_matrix(self):
        # Diane note to self - look into mutable vs immutable
        # because creating array this way caused unexpected results...
        # part = [0] * (maxVal + 1)
        # answer = [part] * (maxVal + 1)
        answer= []
        maxVal = 0
        for node in self.nodes:
            maxVal = max(maxVal, node.value)
        
        for i in range(0, maxVal + 1):
            answer.append([0] * (maxVal + 1))

        for node in self.nodes:
            for edge in node.edges:
                if edge.node_to.value != node.value:
                    answer[node.value][edge.node_to.value] = edge.value

        return answer

graph = Graph()
graph.insert_edge(100, 1, 2)
graph.insert_edge(101, 1, 3)
graph.insert_edge(102, 1, 4)
graph.insert_edge(103, 3, 4)
# Should be [(100, 1, 2), (101, 1, 3), (102, 1, 4), (103, 3, 4)]
print graph.get_edge_list()
# Should be [None, [(2, 100), (3, 101), (4, 102)], None, [(4, 103)], None]
print graph.get_adjacency_list()
# Should be [[0, 0, 0, 0, 0], [0, 0, 100, 101, 102], [0, 0, 0, 0, 0], [0, 0, 0, 0, 103], [0, 0, 0, 0, 0]]
print graph.get_adjacency_matrix()


#--------------------------------------------------------------------------
#Here's UDACITY'S solution:
#--------------------------------------------------------------------------

def get_edge_list(self):
    edge_list = []
    for edge_object in self.edges:
        edge = (edge_object.value, edge_object.node_from.value, edge_object.node_to.value)
        edge_list.append(edge)
    return edge_list

def get_adjacency_list(self):
    max_index = self.find_max_index()
    adjacency_list = [None] * (max_index + 1)
    for edge_object in self.edges:
        if adjacency_list[edge_object.node_from.value]:
            adjacency_list[edge_object.node_from.value].append((edge_object.node_to.value, edge_object.value))
        else:
            adjacency_list[edge_object.node_from.value] = [(edge_object.node_to.value, edge_object.value)]
    return adjacency_list

def get_adjacency_matrix(self):
    max_index = self.find_max_index()
    adjacency_matrix = [[0 for i in range(max_index + 1)] for j in range(max_index + 1)]
    for edge_object in self.edges:
        adjacency_matrix[edge_object.node_from.value][edge_object.node_to.value] = edge_object.value
    return adjacency_matrix

def find_max_index(self):
    max_index = -1
    if len(self.nodes):
        for node in self.nodes:
            if node.value > max_index:
                max_index = node.value
    return max_index