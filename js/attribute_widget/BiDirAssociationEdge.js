define([
    'jqueryui',
    'jsplumb',
    'lodash',
    'attribute_widget/AbstractEdge',
    'attribute_widget/AbstractClassNode',
    'attribute_widget/ObjectNode',
    'attribute_widget/RelationshipNode',
    'attribute_widget/RelationshipGroupNode',
    'attribute_widget/EnumNode',
    'attribute_widget/NodeShapeNode',
    'attribute_widget/EdgeShapeNode',
	'attribute_widget/ViewObjectNode',
	'attribute_widget/ViewRelationshipNode'
],/** @lends BiDirAssociationEdge */function($,jsPlumb,_,AbstractEdge,AbstractClassNode,ObjectNode,RelationshipNode,RelationshipGroupNode,EnumNode,NodeShapeNode,EdgeShapeNode,ViewObjectNode,ViewRelationshipNode) {

    BiDirAssociationEdge.TYPE = "Bi-Dir-Association";
    BiDirAssociationEdge.RELATIONS = [
        {
            sourceTypes: [ObjectNode.TYPE],
            targetTypes: [EnumNode.TYPE,NodeShapeNode.TYPE,RelationshipNode.TYPE,RelationshipGroupNode.TYPE,ViewRelationshipNode.TYPE]
        },
        {
            sourceTypes: [RelationshipNode.TYPE],
            targetTypes: [EnumNode.TYPE,EdgeShapeNode.TYPE,ObjectNode.TYPE,AbstractClassNode.TYPE,ViewObjectNode.TYPE]
        },
        {
            sourceTypes: [RelationshipGroupNode.TYPE],
            targetTypes: [ObjectNode.TYPE,AbstractClassNode.TYPE]
        },
        {
            sourceTypes: [AbstractClassNode.TYPE],
            targetTypes: [EnumNode.TYPE,RelationshipNode.TYPE,RelationshipGroupNode.TYPE]
        },
        {
            sourceTypes: [EnumNode.TYPE],
            targetTypes: [ObjectNode.TYPE,RelationshipNode.TYPE,AbstractClassNode.TYPE]
        },
        {
            sourceTypes: [NodeShapeNode.TYPE],
            targetTypes: [ObjectNode.TYPE]
        },
        {
            sourceTypes: [EdgeShapeNode.TYPE],
            targetTypes: [RelationshipNode.TYPE]
        },
		{
            sourceTypes: [ViewObjectNode.TYPE],
            targetTypes: [EnumNode.TYPE,NodeShapeNode.TYPE,RelationshipNode.TYPE,RelationshipGroupNode.TYPE,ViewRelationshipNode.TYPE]
        },
		{
            sourceTypes: [ViewRelationshipNode.TYPE],
            targetTypes: [EnumNode.TYPE,EdgeShapeNode.TYPE,ObjectNode.TYPE,AbstractClassNode.TYPE,ViewObjectNode.TYPE]
        }
    ];

    BiDirAssociationEdge.prototype = new AbstractEdge();
	BiDirAssociationEdge.prototype.constructor = BiDirAssociationEdge;
    /**
     * BiDirAssociationEdge
     * @class attribute_widget.BiDirAssociationEdge
     * @memberof attribute_widget
     * @extends attribute_widget.AbstractEdge
     * @constructor
     * @param {string} id
     * @param {attribute_widget.AbstractNode} source
     * @param {attribute_widget.AbstractNode} target
     */
    function BiDirAssociationEdge(id,source,target){
        AbstractEdge.call(this,BiDirAssociationEdge.TYPE,id,source,target);
    }

    return BiDirAssociationEdge;

});